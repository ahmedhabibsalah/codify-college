import styled from 'styled-components';
export const Button = styled.button`
	border-radius: 4px;
	background: none;
	white-space: nowrap;
	padding: 10px 20px;
	font-size: 1.25rem;
	color: #ff5773;
	outline: none;
	border: 2px solid #ff5773;
	cursor: pointer;
	overflow: hidden;
	position: relative;
	&:before {
		background: #ff5773;
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.6s ease;
		width: 100%;
		height: 0%;
		transform: translate(-50%, -50%) rotate(45deg);
	}
	&:hover:before {
		height: 500%;
	}
	&:hover {
		color: #2b2d42;
	}
    
`;