import React from "react"

import direction from './direction.svg'

const DirectionButton = () => {
    return (
        <button>
            <img
                className="object-cover items-center object-center rounded justify-center mt-2 mb-1 flex mx-auto"
                src={direction} alt={"direction"}
                width="20px"
                height="20px"
              />
        </button>
    )
}

export default DirectionButton