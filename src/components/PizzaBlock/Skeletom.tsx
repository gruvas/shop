import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={500}
        viewBox="0 0 280 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="141" cy="125" r="125" /> 
        <rect x="0" y="272" rx="11" ry="11" width="280" height="20" /> 
        <rect x="0" y="312" rx="11" ry="11" width="280" height="89" /> 
        <rect x="0" y="430" rx="11" ry="11" width="90" height="27" /> 
        <rect x="130" y="422" rx="11" ry="11" width="150" height="44" />
    </ContentLoader>
)

export default Skeleton