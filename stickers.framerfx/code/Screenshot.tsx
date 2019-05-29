import * as React from 'react';
import styled from 'styled-components';
import {ControlType, addPropertyControls} from 'framer';
import {url} from 'framer/resource';

const Container = styled.div`
	justify-content: center;
	align-items: center;
	display: flex;
	background: linear-gradient(-45deg, rgb(88, 81, 219), rgb(64, 93, 230));
	flex-direction: column;
`;

const Title = styled.div`
	font-family: 'IBM Plex Sans';
	color: white;
	font-size: 2em;
	font-weight: bold;
	text-align: center;
`;

type Device = 'iphone-5-8-inch' | 'iphone-6-5-inch' | 'android';

type Props = {
	device: Device;
};

export function Screenshot(props: Props) {
	const height = props.device === 'iphone-6-5-inch' ? 896 : 736;
	const image =
		props.device === 'iphone-6-5-inch'
			? url('./code/assets/iphone-x.png')
			: props.device === 'iphone-5-8-inch'
			? url('./code/assets/iphone-8-plus.png')
			: url('./code/assets/pixel3.png');
	return (
		<Container
			style={{
				width: 414,
				height
			}}
		>
			<div style={{marginTop: 100}}>
				<Title>Create awesome stickers</Title>
				{props.device === 'android' ? <div style={{height: 20}} /> : null}
				{props.device === 'iphone-5-8-inch' ? (
					<img src={image} style={{width: 400}} />
				) : null}
				{props.device === 'android' ? (
					<img src={image} style={{width: 360}} />
				) : null}
				{props.device === 'iphone-6-5-inch' ? (
					<div>
						<img src={image} style={{width: 440}} />
					</div>
				) : null}
			</div>
		</Container>
	);
}

addPropertyControls(Screenshot, {
	device: {
		type: ControlType.Enum,
		title: 'Device',
		defaultValue: 'iphone-5-8-inch',
		options: ['iphone-5-8-inch', 'iphone-6-5-inch', 'android'],
		optionTitles: ['iPhone 5.8 inch', 'iPhone 6.5 inch', 'Android']
	}
});

const defaultProps: Props = {
	device: 'iphone-5-8-inch'
};

Screenshot.defaultProps = defaultProps;
