export type ForwardedRefProps= {
   forwardedRef: React.MutableRefObject<HTMLDivElement | null>
}

export type KeyProps = {
   animationKey: string,
   setAnimationKey: React.Dispatch<React.SetStateAction<string>>
}
