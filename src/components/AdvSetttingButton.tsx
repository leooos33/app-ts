import React from "react"

import expand_more from './expand_more.svg'

const AdvSettingsButton = () => {
    return (
        <button className="items-end ml-auto inline-flex  text-sm lg:w-5/12 pl-9 font-semibold text-white pt-2" type="button">
        Advanced settings
        <img
          className="object-cover object-center"
          src={expand_more} alt={"expand_more"}
          width="18px"
          height="18px"
        />
      </button>
    )

}
export default AdvSettingsButton