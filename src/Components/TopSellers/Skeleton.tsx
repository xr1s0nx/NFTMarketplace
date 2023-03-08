import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        speed={2}
        width={160}
        height={60}
        viewBox="0 0 160 60"
        backgroundColor="#edeffe"
        foregroundColor="#ecebeb"
        opacity={0.3}
    >
        <rect x="48" y="61" rx="3" ry="3" width="154" height="18" />
        <circle cx="25" cy="23" r="20" />
        <rect x="55" y="7" rx="5" ry="5" width="92" height="10" />
        <rect x="55" y="25" rx="5" ry="5" width="50" height="10" />
    </ContentLoader>
)

export default Skeleton

