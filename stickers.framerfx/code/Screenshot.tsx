import * as React from 'react';
import styled from 'styled-components';
import {ControlType, addPropertyControls} from 'framer';
import {url} from 'framer/resource';

const Container = styled.div`
	align-items: center;
	display: flex;
	background: linear-gradient(-45deg, rgb(88, 81, 219), rgb(64, 93, 230));
	flex-direction: column;
`;

const Title = styled.div`
	font-family: 'IBM Plex Sans';
	color: white;
	font-size: 2.2em;
	font-weight: bold;
	text-align: center;
`;

type Device = 'iphone-5-8-inch' | 'iphone-6-5-inch' | 'android';

type Props = {
	device: Device;
	screenshot: string;
	slogan: string;
};

const getStyle = (device: Device): React.CSSProperties => {
	if (device === 'iphone-5-8-inch') {
		return {
			width: 398,
			left: -49,
			top: -98,
			position: 'absolute'
		};
	}
	if (device === 'iphone-6-5-inch') {
		return {
			width: 435,
			position: 'absolute',
			left: -43,
			top: -57
		};
	}
	return {
		width: 410,
		position: 'absolute',
		left: -29,
		top: -77
	};
};

const getScreenWidth = (device: Device): React.CSSProperties => {
	if (device === 'iphone-6-5-inch') {
		return {
			width: 350
		};
	}
	if (device === 'android') {
		return {
			width: 350
		};
	}
	return {
		width: 300
	};
};

const Frame = (props: {device: Device; screen: string}) => {
	const image =
		props.device === 'iphone-6-5-inch'
			? url('./code/assets/iphone-x.png')
			: props.device === 'iphone-5-8-inch'
			? url('./code/assets/iphone-8-plus.png')
			: url('./code/assets/pixel3.png');
	return (
		<div style={{position: 'relative', marginTop: 100}}>
			<img src={props.screen} style={getScreenWidth(props.device)} />
			<img src={image} style={getStyle(props.device)} />
		</div>
	);
};

export function Screenshot(props: Props) {
	const height = props.device === 'iphone-6-5-inch' ? 896 : 736;

	return (
		<Container
			style={{
				width: 414,
				height
			}}
		>
			<div style={{marginTop: 50}}>
				<Title>{props.slogan}</Title>
				{props.device === 'android' ? <div style={{marginTop: -10}} /> : null}
				{props.device === 'iphone-6-5-inch' ? (
					<div style={{marginTop: -50}} />
				) : null}
				<Frame screen={props.screenshot} device={props.device} />
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
	},
	screenshot: {
		type: ControlType.Image,
		title: 'Screenshot',
		defaultValue: url('./code/screens/iPhone 1.PNG')
	},
	slogan: {
		type: ControlType.String,
		title: 'Slogan',
		defaultValue: 'Create awesome stickers'
	}
});

const defaultProps: Props = {
	device: 'iphone-5-8-inch',
	screenshot: url('./code/screens/iPhone 1.PNG'),
	slogan: 'Create awesome stickers'
};

Screenshot.defaultProps = defaultProps;
