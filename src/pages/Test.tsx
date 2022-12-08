import React from 'react'

type Props = {}

const Test = (props: Props) => {
    return (
        <div>

            <div className='radio-choose-active'>
                <input type="radio" id="html" name="fav_language" defaultValue="HTML" />
                &nbsp; <label htmlFor="html">HTML</label><br />
                &nbsp; <input type="radio" id="css" name="fav_language" defaultValue="CSS" />
                &nbsp; <label htmlFor="css">CSS</label><br />
                &nbsp; <input type="radio" id="javascript" name="fav_language" defaultValue="JavaScript" />
                &nbsp; <label htmlFor="javascript">JavaScript</label>
            </div>

        </div>
    )
}

export default Test