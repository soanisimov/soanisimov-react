import{motion} from "framer-motion";
import {RiGithubLine,RiMailLine, RiTelegram2Fill, RiFileDownloadLine} from "@remixicon/react";


export const CONTACT_CONTENT = {
    headline: "Контакти",
    description:
        "З нетерпінням чекаю на можливість працювати разом та створювати щось інноваційне!",
    email: "anisimovsergii@gmail.com",
    socialLinks: [
        {
            platform: "Telegram",
            url: "https://t.me/xlebokot1",
            icon: "RiTwitterXFill",
        },
        {
            platform: "GitHub",
            url: "https://github.com/soanisimov",
            icon: "RiGithubFill",
        },
        {
            platform: "LinkedIn",
            url: "mailto:anisimovsergii@gmail.com",
            icon: "RiLinkedinFill",
        },
        {
            platform: "Resume",
            url: "/resumeAnisimov.pdf",
            icon: "RiFileDownloadLine",
        }
    ],
    footerText: `Анісімов Сергій • ${new Date().getFullYear()}`,
};

const Contacts = () => {
    const textVariants = {
        hidden: {opacity: 0,},
        visible: {opacity: 1,transition: {duration: 0.8, ease: 'easeInOut'}},
    }
    const iconVariants = {
        hidden: {opacity: 0, },
        visible: {opacity: 1, transition: {duration: 0.8, ease: 'easeInOut'}},
    }
    return(
        <section className="min-h-screen flex flex-col justify-center px-4 md:px-10">
            <motion.h3 className="text-6xl md:text-8xl leading-none" initial="hidden" whileInView="visible"
                       variants={textVariants}>
                {CONTACT_CONTENT.headline}
            </motion.h3>

            <motion.p className="text-lg md:text-2xl mt-6 max-w-3xl" initial="hidden" variants={textVariants}
                      whileInView="visible" id="contact">
                {CONTACT_CONTENT.description}
            </motion.p>


            <div className="flex space-x-6 mt-8">
                {CONTACT_CONTENT.socialLinks.map((link, index) => {
                    const Icon =
                        link.icon === "RiTwitterXFill"
                            ? RiTelegram2Fill
                            : link.icon === "RiGithubFill"
                                ? RiGithubLine
                                : link.icon === "RiFileDownloadLine"
                                    ? RiFileDownloadLine
                                    : RiMailLine;

                    // Conditional rendering for download link
                    const linkProps = link.icon === "RiFileDownloadLine"
                        ? {
                            href: link.url,
                            download: link.downloadName || true,
                            target: undefined,
                            rel: undefined
                        }
                        : {
                            href: link.url,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        };

                    return (
                        <motion.a
                            key={link.platform}
                            {...linkProps}
                            aria-label={link.ariaLabel}
                            initial="hidden"
                            whileInView="visible"
                            custom={1.0 + index * 0.2}
                            variants={iconVariants}
                        >
                            <Icon size={70}/>
                        </motion.a>
                    );
                })}
            </div>
            <motion.p className="text-sm text-stone-200 mt-10" initial="hidden" variants={textVariants}
            whileInView="visible">
                {CONTACT_CONTENT.footerText}
            </motion.p>
        </section>
    )
}
export default Contacts