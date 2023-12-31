import React from 'react';
import { Carousel } from 'antd';
import { SectionTitle } from 'src/components';
import {
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined,
} from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { Box } from '@chakra-ui/react';
import { news } from 'src/config/constants';

const { Meta } = Card;


const contentStyle: React.CSSProperties = {
	height: '490px',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#364d79',
  display:'flex',
  alignItems:'center',
  margin:'auto',
  justifyContent:'center'
};

const CarouselPage: React.FC = () => (
	<>
		<SectionTitle
			style={{
				display: 'flex',
				justifyContent: 'center',
				marginTop: '50px',
				marginBottom: '50px',
			}}
			subtitle=' '
			title='Hodimlar'
		/>

		<Carousel autoplay style={contentStyle}>
			{news.map(item => (
				<div>
					<h3 style={contentStyle}>
						<Card
							style={{ width: 300 }}
							cover={<img alt='example' src={item.image} />}
							actions={[
								<SettingOutlined key='setting' />,
								<EditOutlined key='edit' />,
								<EllipsisOutlined key='ellipsis' />,
							]}
						>
							<Meta
								avatar={<Avatar src={item.image} />}
								title={item.author}
								description={item.prof}
							/>
						</Card>{' '}
					</h3>
				</div>
			))}
		</Carousel>
	</>
);

export default CarouselPage;
