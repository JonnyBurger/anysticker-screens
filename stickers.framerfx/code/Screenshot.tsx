import * as React from 'react';
import {Frame, ControlType, addPropertyControls} from 'framer';
import {url} from 'framer/resource';

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
		<Frame
			width={414}
			height={height}
			position="relative"
			style={{
				background:
					'linear-gradient(-45deg, rgb(88, 81, 219), rgb(64, 93, 230))'
			}}
		>
			<img src={image} style={{width: 300}} />
		</Frame>
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
