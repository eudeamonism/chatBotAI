import { XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import Dropzone from 'react-dropzone';

useState;

const StandardMessageForm = () => {
	const [message, setMessage] = useState('');
	const [attachment, setAttachment] = useState('');
	const [preview, setPreview] = useState('');

	const handleChange = (e) => setMessage(e.target.value);

	return (
		<div className='message-form-container'>
			{preview && (
				<div className='message-form-preview'>
					<img
						alt='message-form-preview'
						className='message-form-preview-image'
						src={preview}
						onLoad={() => URL.revokeObjectURL(preview)}
					/>
					<XMarkIcon
						className='message-form-icon-x'
						conClick={() => {
							setPreview('');
							setAttachment('');
						}}
					/>
				</div>
			)}
			<div className='message-form'>
				<div className='message-form-input-container'>
					<input
						className='message-form-input'
						type='text'
						value={message}
						onChange={handleChange}
						placeholder="What's your query?"
					/>
				</div>
				<div className='message-form-icons'>
					<Dropzone
						acceptedFiles='.jpg,.jpeg,.png'
						multiple={false}
						noClick={true}
						onDrop={(acceptedFiles) => {
							setAttachment(acceptedFiles[0]);
							setPreview(URL.createObjectURL(acceptedFiles[0]));
						}}>
						{({ getRootProps, getInputProps, open }) => (
							<div {...getRootProps()}>
								<input {...getInputProps()} />
							</div>
						)}
					</Dropzone>
				</div>
			</div>
		</div>
	);
};

export default StandardMessageForm;

//56 minutes
