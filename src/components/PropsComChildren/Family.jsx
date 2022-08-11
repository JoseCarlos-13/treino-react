import React, { cloneElement } from 'react'

export default (props) => {
	return (
		<React.Fragment>
			{props.children.map((child, id) => {
				console.log(child, id)
				return cloneElement(child, { props, key: id } )
			})}
		</React.Fragment>
	)
}
