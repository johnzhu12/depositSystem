//Greeter,js
import * as React from 'react';
import { Col, Row } from 'antd'
import * as moment from 'moment'

interface States {

}
interface Props {

}

class Demo extends React.Component<Props, States> {
    cacheStartDate: string;
    cacheEndDate: string;
    constructor(props: Props) {
        super(props)

    }


    submit() {

    }

    render() {

        return (
            <div>
                <Row style={{ width: '100%', height: '80px' }}>
                    <Col span={4} style={{ background: 'red', height: '80px' }}>
                    </Col>
                    <Col span={2} style={{ background: 'blue', height: '80px' }}>
                    </Col>
                    <Col span={14} style={{ background: 'black', height: '80px' }}>
                    </Col>
                    <Col span={4} style={{ background: 'red', height: '80px' }}>
                    </Col>
                </Row>
                <div style={{ background: 'white', height: '2px' }}>

                </div>
                <Row style={{ width: '100%', height: '80px' }}>
                    <Col span={4} style={{ background: 'red', height: '80px' }}>
                    </Col>

                    <Col span={16} style={{ background: 'black', height: '80px' }}>
                    </Col>
                    <Col span={4} style={{ background: 'red', height: '80px' }}>

                    </Col>
                </Row>
            </div>

        );
    }
}

export default Demo
