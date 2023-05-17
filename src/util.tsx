export const textAnimation = (delay: number) => {
    let animation = {
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { type: 'spring', damping: 10, mass: 0.2, delay: delay } },
        exit: { y: -20, opacity: 0, transition: { type: 'spring', damping: 20 } }
    }
    return animation
}