import Socials from "./Socials"

const Footer = () => {
    return (
        <footer className="bg-secondary py-12">
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <Socials containerStyles="flex gap-6 mx-auto xl:mx-0 mb-4"
                        iconsStyles="text-primary text-[20px] dark:text-white hover:scale-125 dark:hover:scale-125 transition-all duration-300"
                    />
                    <div className="text-muted-foreground">
                        Copyright &copy; Naoya Yamagata.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
