export type ForwardedRefProps= {
   forwardedRef: React.MutableRefObject<HTMLDivElement | null>
}

export type KeyProps = {
   key: string,
   setKey: React.Dispatch<React.SetStateAction<string>>
}
