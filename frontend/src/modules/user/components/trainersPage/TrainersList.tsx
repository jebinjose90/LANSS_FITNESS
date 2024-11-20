import React, { useEffect, useState } from 'react'
import Icon from '../../../common/Icon'
import Search from '../../../common/Search'
import Pagination from '../../../common/Pagination'
import ChatWithTrainerModal from './ChatWithTrainerModal'
import BookTrainerSlotModal from './BookTrainerSlotModal'

const TrainersList: React.FC = () => {
    const [showChatModal, setShowChatModal] = useState<boolean>(false);
    const [showBookSlotModal, setShowBookSlotModal] = useState<boolean>(false);
    function chatWithTheTrainer() {
        setShowChatModal(true)
    }
    function closeChat() {
        setShowChatModal(false)
    }
    function bookTrainerSlot() {
        setShowBookSlotModal(true)
    }
    function closeBookSlot() {
        setShowBookSlotModal(false)
    }


    // Disable scrolling when modal is open
    useEffect(() => {
        if (showChatModal || showBookSlotModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup when the component is unmounted
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showChatModal,showBookSlotModal]);

    return (
        <>
            <Search />
            <div className='flex flex-col justify-center items-center bg-color2 text-color3 w-full py-5 px-5'>
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div className="border-2 border-color3 font-sanspy-2 p-4 w-60 space-y-2">
                        <div className='flex flex-col'>
                            <img className='w-full h-40 object-cover' src="https://i.imgur.com/g7ObP7e.jpeg" alt="" />
                            <label className='font-extrabold text-xl'>Trainer</label>
                            <label>Specification: <a>________________________</a></label>
                        </div>
                        <div className='grid gap-6 grid-cols-3 pl-2 '>
                            <div className="relative group">
                                {/* Button */}
                                <button className='hover:opacity-45 transition duration-300' >
                                    <Icon svgName="video-icon" width="40" height="27" className="videoCall" />
                                </button>
                                {/* Tooltip */}
                                <div className="absolute top-full mt-2 px-3 py-1 bg-color1 text-color3 text-sm rounded shadow-lg opacity-0 group-hover:opacity-90 transition-opacity">
                                    Video Call
                                </div>
                            </div>
                            <div className="relative group">
                                {/* Button */}
                                <button onClick={chatWithTheTrainer} className="text-color3 text-[11px] font-extrabold font-sanspy hover:opacity-45 transition duration-300 px-2">
                                    <Icon svgName="chat-icon" />
                                </button>
                                {showChatModal && <ChatWithTrainerModal onClose={closeChat} />}
                                {/* Tooltip */}
                                <div className="absolute top-full mt-2 px-3 py-1 bg-color1 text-color3 text-sm rounded shadow-lg opacity-0 group-hover:opacity-90 transition-opacity">
                                    Chat
                                </div>
                            </div>
                            <div className="relative group">
                                {/* Button */}
                                <button onClick={bookTrainerSlot} className="text-color3 text-[11px] font-extrabold font-sanspy hover:opacity-45 transition duration-300 px-2">
                                    <Icon svgName="ticket-icon" />
                                </button>
                                {showBookSlotModal && <BookTrainerSlotModal onClose={closeBookSlot} />}
                                {/* Tooltip */}
                                <div className="absolute top-full mt-2 px-3 py-1 bg-color1 text-color3 text-sm rounded shadow-lg opacity-0 group-hover:opacity-90 transition-opacity">
                                    Book Slot
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="border-2 border-color3 font-sanspy-2 p-4 w-60 space-y-2"></div>
                    <div className="border-2 border-color3 font-sanspy-2 p-4 w-60 space-y-2"></div>
                    <div className="border-2 border-color3 font-sanspy-2 p-4 w-60 space-y-2"></div> */}
                </div>
            </div>
            <Pagination />
        </>
    )
}

export default TrainersList