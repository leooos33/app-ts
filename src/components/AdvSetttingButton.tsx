import React from "react"

import expand_more from './assets/expand_more_a.svg'

const AdvSettingsButton = () => {
    return (
        <button className="items-end ml-auto inline-flex text-md lg:w-2/5 mr-5 font-semibold text-gray1-g66 pt-2" type="button">
        Advanced settings
        <img
          className="object-cover object-center"
          
          src={expand_more} alt={"expand_more_a"}
          width="20px"
          height="20px"
        />
      </button>
    )

}
export default AdvSettingsButton