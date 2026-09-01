import './AssistantRobot.scss';
import axios from "axios";
import { useEffect, useState } from "react";

export default function AssistantRobot(){
    
    const [activeInputBackground, setActiveInputBackground] = useState<boolean>(false);
    const [question, setQuestion] = useState<string> ("");
    const [submittedQuestion, setSubmittedQuestion] = useState<string>("");
    const [answer, setAnswer] = useState<string>("");
    const [displayedAnswer, setDisplayedAnswer] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleAskAssistant = async ()=>{
        if(!question.trim()) return;

        try{
            setLoading(true);

            setSubmittedQuestion(question);

            setAnswer("");
            setDisplayedAnswer("");
            const response = await axios.post(
                "https://portfolio2-0-api.onrender.com/chat",
                {
                    question: question,
                }
            );

            setAnswer(response.data.answer);
            setQuestion("");
        } catch(error){
            console.error(error);
            setAnswer("Não foi possível consultar o assistente no momento.");
        } finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        if (!answer) return;

        let index = 0;

        const interval = setInterval(() => {
            index++;

            setDisplayedAnswer(answer.slice(0, index));

            if (index >= answer.length) {
                clearInterval(interval);
            }
        }, 20); //velocidade de digitação por caracteres (10 = rápido | 20 = normal | 40 = lento)

        return () => clearInterval(interval);
    }, [answer]);

    return(
        <>
            <div className={`${activeInputBackground ? "search-input-background search-input-background-activated" : "search-input-background"}`} onClick={() => !loading && setActiveInputBackground(false)}></div>
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
            <div className={`${activeInputBackground ? "assistant-answer-container" : "assistant-answer-container-disabled"}`}>

                {loading && (<img className="assistant-loader" src="/icon/topbar/ai-thinking-loader.gif" alt="Animação de carregamento de resposta da I.A" />)}

                {submittedQuestion && (
                    <div className="assistant-question">
                        <span className="assistant-terminal-user">You/❯ </span>

                        <span className='question'>{submittedQuestion}</span>
                    </div>
                )}

                {!loading && displayedAnswer && (
                    <div className="assistant-answer">
                        <span className="assistant-terminal-ai">System/❯ </span>

                        <span className='answer'>
                            {displayedAnswer}

                            {displayedAnswer.length < answer.length && (
                                <span className="typing-cursor">|</span>
                            )}
                        </span>
                    </div>
                )}

            </div>
        </>
    );
}