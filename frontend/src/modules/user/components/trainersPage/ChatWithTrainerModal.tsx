import { useEffect, useRef, useState } from "react";
import Icon from "../../../common/Icon";


interface ChildComponentProps {
    onClose: () => void; // Callback to close the child
}

const ChatWithTrainerModal: React.FC<ChildComponentProps> = ({ onClose }) => {
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState<string[]>([]);

    // Automatically scroll to the bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    const sendMessage = () => {

    };

    return (
        <>
            <div aria-hidden="true" className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-50 backdrop-blur-sm">
                <div role="dialog" aria-modal="true" className="relative my-6 mx-auto max-w-3xl w-[920px] sm:w-[920px] md:w-[920px] lg:w-[1024px] xl:w-[1280px]">
                    {/*content*/}
                    <div className="border-0 shadow-lg relative flex flex-col w-full bg-color1 outline-none focus:outline-none">
                        <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-2/4">
                            <div className="flex sm:items-center justify-between py-3 border-b-2 border-color3">
                                <div className="relative flex items-center space-x-4">
                                    <div className="relative">
                                        <span className="absolute text-green-500 right-0 bottom-0">
                                            <svg width="20" height="20">
                                                <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                                            </svg>
                                        </span>
                                        <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="" className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"></img>
                                    </div>
                                    <div className="flex flex-col leading-tight">
                                        <div className="text-2xl mt-1 flex items-center">
                                            <span className="text-color3 mr-3">Anderson Vanhron</span>
                                        </div>
                                        <span className="text-lg text-color3">Junior Developer</span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button onClick={onClose} type="button" className="inline-flex items-center justify-center rounded-lg border border-color3 h-10 w-10 transition duration-500 ease-in-out text-color3 hover:bg-color2 focus:outline-none">
                                        <Icon svgName="close-icon" className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                            {/* <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-color3 scrollbar-thumb-rounded scrollbar-track-color3 scrollbar-w-2 scrolling-touch h-[440px]">

                                <div className="chat-message">
                                    <div className="flex items-end">
                                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                            <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-color2 text-color3">Can be verified on any platform using docker</span></div>
                                        </div>
                                        <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="w-6 h-6 rounded-full order-1"></img>
                                    </div>
                                </div>
                                <div className="chat-message">
                                    <div className="flex items-end justify-end">
                                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                                            <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-color3 text-color1 ">Your error message says permission denied, npm global installs must be given root privileges.</span></div>
                                        </div>
                                        <img src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="w-6 h-6 rounded-full order-2"></img>
                                    </div>
                                </div>
                                <div className="chat-message">
                                    <div className="flex items-end">
                                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                            <div><span className="px-4 py-2 rounded-lg inline-block bg-color2 text-color3">Command was run with root privileges. I'm sure about that.</span></div>
                                            <div><span className="px-4 py-2 rounded-lg inline-block bg-color2 text-color3">I've update the description so it's more obviously now</span></div>
                                            <div><span className="px-4 py-2 rounded-lg inline-block bg-color2 text-color3">FYI https://askubuntu.com/a/700266/510172</span></div>
                                            <div>
                                                <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-color2 text-color3">
                                                    Check the line above (it ends with a # so, I'm running it as root )
                                                    <pre># npm install -g @vue/devtools</pre>
                                                </span>
                                            </div>
                                        </div>
                                        <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="w-6 h-6 rounded-full order-1"></img>
                                    </div>
                                </div>
                                <div className="chat-message">
                                    <div className="flex items-end justify-end">
                                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                                            <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-color3 text-color1 ">Any updates on this issue? I'm getting the same error when trying to install devtools. Thanks</span></div>
                                        </div>
                                        <img src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="w-6 h-6 rounded-full order-2"></img>
                                    </div>
                                </div>
                                <div className="chat-message">
                                    <div className="flex items-end">
                                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                            <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-color2 text-color3">Thanks for your message David. I thought I'm alone with this issue. Please, ? the issue to support it :)</span></div>
                                        </div>
                                        <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="w-6 h-6 rounded-full order-1"></img>
                                    </div>
                                </div>
                                <div className="chat-message">
                                    <div className="flex items-end justify-end">
                                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                                            <div><span className="px-4 py-2 rounded-lg inline-block bg-color3 text-color1 ">Are you using sudo?</span></div>

                                        </div>
                                        <img src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="w-6 h-6 rounded-full order-2"></img>
                                    </div>
                                </div>
                                <div className="chat-message">
                                    <div className="flex items-end">
                                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                            <div><span className="px-4 py-2 rounded-lg inline-block bg-color2 text-color3">It seems like you are from Mac OS world. There is no /Users/ folder on linux ?</span></div>
                                            <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-color2 text-color3">I have no issue with any other packages installed with root permission globally.</span></div>
                                        </div>
                                        <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="w-6 h-6 rounded-full order-1"></img>
                                    </div>
                                </div>
                                <div className="chat-message">
                                    <div className="flex items-end justify-end">
                                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                                            <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-color3 text-color1 ">yes, I have a mac. I never had issues with root permission as well, but this helped me to solve the problem</span></div>
                                        </div>
                                        <img src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="w-6 h-6 rounded-full order-2"></img>
                                    </div>
                                </div>
                                <div className="chat-message">
                                    <div className="flex items-end">
                                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                            <div><span className="px-4 py-2 rounded-lg inline-block bg-color2 text-color3">I get the same error on Arch Linux (also with sudo)</span></div>
                                            <div><span className="px-4 py-2 rounded-lg inline-block bg-color2 text-color3">I also have this issue, Here is what I was doing until now: #1076</span></div>
                                            <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-color2 text-color3">even i am facing</span></div>
                                        </div>
                                        <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="w-6 h-6 rounded-full order-1"></img>
                                    </div>
                                </div>
                                <div ref={messagesEndRef} />
                            </div> */}

                            <div>
                                {chat.map((msg, index) => (
                                    <div key={index}>{msg}</div>
                                ))}
                            </div>

                            <div className="border-t-2 border-color3 px-4 pt-4 mb-2 sm:mb-0">
                                <div className="relative flex">
                                    <span className="absolute inset-y-0 flex items-center">
                                        <button type="button" className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-color3 hover:bg-color2 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-color3">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                                            </svg>
                                        </button>
                                    </span>
                                    <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write your message!" className="w-full focus:outline-none focus:placeholder-color3 text-color3 placeholder-color3 pl-12 bg-color1 rounded-md py-3"></input>
                                    <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
                                        <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-color3 hover:bg-color2 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-color3">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                                            </svg>
                                        </button>
                                        <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-color3 hover:bg-color2 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-color3">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                        </button>
                                        <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-color3 hover:bg-color2 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-color3">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                        </button>
                                        <button type="button"  onClick={sendMessage} className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-color1 bg-color3 hover:bg-color2 focus:outline-none">
                                            <span className="font-bold">Send</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 ml-2 transform rotate-90">
                                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
        </>
    );
}

export default ChatWithTrainerModal