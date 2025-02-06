import { useState } from "react";
import { motion } from "framer-motion";
import { RiGithubLine, RiMailLine, RiTelegram2Fill, RiFileDownloadLine, RiLinkedinBoxFill,RiPhoneFill} from "@remixicon/react";

export const CONTACT_CONTENT = {
    headline: "Контакти",
    description: "З нетерпінням чекаю на можливість працювати разом та створювати щось інноваційне!",
    email: "anisimovsergii@gmail.com",
    telegram:"@xlebokot1",
    phone:"+38-097-950-80-68",
    socialLinks: [
        { platform: "Telegram", url: "https://t.me/xlebokot1", icon: RiTelegram2Fill },
        { platform: "GitHub", url: "https://github.com/soanisimov", icon: RiGithubLine },
        { platform: "LinkedIn",url: "https://www.linkedin.com/in/anisimov-sergii-44321934a/" ,icon: RiLinkedinBoxFill},
        { platform: "Email", url: "mailto:anisimovsergii@gmail.com", icon: RiMailLine, text:"123" },
        { platform: "Resume", url: "/CV_Sergii_Anisimov_Front_end.pdf", icon: RiFileDownloadLine },
        // { platform: "Phone", url: "tel:+380979508068", icon: RiPhoneFill},


    ],
    footerText: `Сергій Анісімов • ${new Date().getFullYear()}`,
    footerTextFile: "Контакти у формі тексту",
};

const Contacts = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <section className="min-h-screen flex flex-col justify-center px-4 md:px-10">
            <motion.h3 className="text-6xl md:text-8xl font-medium" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                {CONTACT_CONTENT.headline}
            </motion.h3>

            <motion.p className="text-lg md:text-2xl mt-6 max-w-3xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                {CONTACT_CONTENT.description}
            </motion.p>

            <div className="flex space-x-6 mt-8" id="contact">
                {CONTACT_CONTENT.socialLinks.map((link, index) => (
                    <motion.a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className="hover:scale-110 transition-all duration-300"
                    >
                        <link.icon size={70} />
                    </motion.a>
                ))}
            </div>

            <motion.p className="text-sm text-stone-200 mt-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                {CONTACT_CONTENT.footerText}
            </motion.p>

            <button onClick={() => setModalOpen(true)} className="text-sm text-stone-200/80 text-left mt-2 hover:underline">
                {CONTACT_CONTENT.footerTextFile}
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-xl flex items-center justify-center">
                    <div className="bg-zinc-900 p-6 rounded-lg shadow-lg w-96 text-white">
                        <h2 className="text-xl font-bold">Контактна інформація</h2>
                        <p className="mt-4">Email: {CONTACT_CONTENT.email}</p>
                        <p className="mt-4">Telegram: {CONTACT_CONTENT.telegram}</p>
                        <p className="mt-4">Телефон: {CONTACT_CONTENT.phone}</p>
                        <button onClick={() => setModalOpen(false)}
                                className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">
                            Закрити
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contacts;
