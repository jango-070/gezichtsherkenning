import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return(
		<div>
		<p classsName ='f3'>
			{`Met deze app kan je een gezicht detecteren van je foto.`}
		</p>
		<div className='center'>
			<div className='form center pa4 br3 shadow-5'>
				<input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
				<button 
				className='w-60 grow f4 link ph3 pv2 dib white bg-light-purple' 
				onClick={onButtonSubmit}
				>Detecteer Gezicht</button>
				
			</div>
		</div>
		</div>
	);
}

export default ImageLinkForm;