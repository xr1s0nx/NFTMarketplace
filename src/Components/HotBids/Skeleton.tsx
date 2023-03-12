import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        speed={2}
        width={250}
        height={430}
        viewBox="0 0 250 430"
        backgroundColor="#edeffe"
        foregroundColor="#ecebeb"
        opacity={0.3}
    >
        <rect x="0" y="0" rx="16" ry="16" width="250" height="360" />
        <rect x="0" y="389" rx="24" ry="24" width="250" height="40" />
    </ContentLoader>
)

export default Skeleton

