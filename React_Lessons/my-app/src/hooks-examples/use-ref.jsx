import {useRef} from "react";

const UseRef = () => {
	const fileInputRef = useRef(null);


	const handleFile = () => {
		fileInputRef.current.click();
	}

	return (
			<div>
				<button onClick={handleFile}>
					Загрузить файл
				</button>
				<input hidden={true} ref={fileInputRef} type="file"/>
			</div>
	);
};

export default UseRef;