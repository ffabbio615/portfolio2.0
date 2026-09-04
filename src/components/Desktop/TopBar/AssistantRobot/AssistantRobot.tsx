import './AssistantRobot.scss';
import axios from "axios";
import { useEffect, useState } from "react";

type Message = {
    id: number;
    role: "user" | "assistant";
    content: string;
};

export default function AssistantRobot(){
    
    const [activeInputBackground, setActiveInputBackground] = useState<boolean>(false);
    const [question, setQuestion] = useState<string> ("");
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const [answer, setAnswer] = useState<string>("");
    const [displayedAnswer, setDisplayedAnswer] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleAskAssistant = async () => {
        if (!question.trim()) return;

        const currentQuestion = question.trim();

        setMessages((prev) => [
            ...prev,
            {
                id: Date.now(),
                role: "user",
                content: currentQuestion,
            },
        ]);

        setQuestion("");
        setAnswer("");
        setDisplayedAnswer("");
        setLoading(true);

        try {
            const response = await axios.post(
                "https://portfolio2-0-api.onrender.com/chat",
                {
                    question: currentQuestion,
                }
            );

            setIsTyping(true);
            setAnswer(response.data.answer);

        } catch (error) {
            console.error(error);

            setIsTyping(true);
            setAnswer(
                "Não foi possível consultar o assistente no momento."
            );

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!answer) return;

        let index = 0;

        const interval = setInterval(() => {
            index++;

            const text = answer.slice(0, index);

            setDisplayedAnswer(text);

            if (index >= answer.length) {
                clearInterval(interval);

                setMessages((prev) => [
                    ...prev,
                    {
                        id: Date.now(),
                        role: "assistant",
                        content: answer,
                    },
                ]);

                setIsTyping(false);
            }
        }, 20);

        return () => clearInterval(interval);
    }, [answer]);

    return(
        <>
            <div className={`${activeInputBackground ? "search-input-background search-input-background-activated" : "search-input-background"}`}></div>


            <div className='topbar-assistant-robot-container'>
                <div className='assistant-robot-container'>
                    <div className='search-input-container'>
                        <input 
                            className='search-input' 
                            type='text' 
                            placeholder='Pergunte algo sobre mim...' 
                            value={question}
                            onClick={() => setActiveInputBackground(true)} 
                            onChange={(e)=> setQuestion(e.target.value)} 
                            onKeyDown={(e)=> {
                                if (e.key === "Enter" && !loading){
                                    handleAskAssistant();
                                }
                            }}
                            disabled={loading}
                        />
                        <button className='search-input-button' type='button' onClick={handleAskAssistant} disabled={loading}>
                            <img className='search-input-icon' src='/icon/topbar/magnifier-icon.svg' alt='Ícone de lupa da barra de pesquisa' />
                        </button>
                    </div>
                    <img className='assistant-robot' src='/icon/topbar/assistant-robot.gif' alt='Robô Assistente' />
                </div>
            </div>


            <div className={`${activeInputBackground ? "assistant-question-answer-container" : "assistant-question-answer-container-disabled"}`}>

                <div className='assistant-title-container'>
                    <img className='assistant-title-logo' src={"/icon/logo/fm-white-logo-icon.svg"} alt='Logo do Portfólio' />
                    <span className='assistant-title'>Portfólio:\ Informações Profissionais</span>
                    <button className='btn-close-assistant-container' onClick={() => !loading && setActiveInputBackground(false)}>
                        <img src="/icon/window/red-circle-icon.svg" alt='Botão do ícone de fechar janela' />
                    </button>
                </div>

                {loading && (<img className="assistant-loader" src="/icon/topbar/ai-thinking-loader.gif" alt="Animação de carregamento de resposta da I.A" />)}

                <div className='assistant-messages-container'>
                    <div className='question-answer-container'>
                        {messages.map((message) => (
                            message.role === "user" ? (
                                <div key={message.id} className="assistant-question">
                                    <span className="assistant-terminal-user">You/❯</span>

                                    <span className='question'>{message.content}</span>
                                </div>
                            ) : (
                                <div key={message.id} className="assistant-answer">
                                    <span className="assistant-terminal-ai">
                                        System/❯
                                    </span>

                                    <span className='answer'>
                                        {message.content}
                                    </span>
                                </div>
                            )
                        ))}

                        {isTyping && (
                            <div className="assistant-answer">
                                <span className="assistant-terminal-ai">System/❯</span>

                                <span className='answer'>
                                    {displayedAnswer}
                                    <span className="typing-cursor">|</span>
                                </span>
                            </div>
                        )}                
                    </div>
                </div>

            </div>
        </>
    );
}