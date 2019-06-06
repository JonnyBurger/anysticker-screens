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
	font-size: 50px;
	font-weight: bold;
	margin-left: 18px;
`;

const Subtitle = styled.div`
	font-family: 'IBM Plex Sans';
	color: white;
	font-size: 26px;
	margin-left: 18px;
`;

type Device = 'iphone-5-8-inch' | 'iphone-6-5-inch' | 'android';

type Props = {
	device: Device;
	screenshot: string;
	slogan: string;
	subtitle: string;
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
			width: 400,
			position: 'absolute',
			left: -38,
			top: -52
		};
	}
	return {
		width: 380,
		position: 'absolute',
		left: -29,
		top: -73
	};
};

const getScreenWidth = (device: Device): React.CSSProperties => {
	if (device === 'iphone-6-5-inch') {
		return {
			width: 325
		};
	}
	if (device === 'android') {
		return {
			width: 320
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
				height,
				overflow: 'hidden'
			}}
		>
			<div style={{marginTop: 30}}>
				<Title>{props.slogan}</Title>
				<Subtitle>{props.subtitle}</Subtitle>
				{props.device === 'android' ? <div style={{marginTop: -25}} /> : null}
				{props.device === 'iphone-6-5-inch' ? (
					<div style={{marginTop: -65}} />
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
		defaultValue: 'Create'
	},
	subtitle: {
		type: ControlType.String,
		title: 'Subtitle',
		defaultValue: 'awesome stickers'
	}
});

const defaultProps: Props = {
	device: 'iphone-5-8-inch',
	screenshot: url('./code/screens/iPhone 1.PNG'),
	slogan: 'Create',
	subtitle: 'awesome stickers'
};

Screenshot.defaultProps = defaultProps;
