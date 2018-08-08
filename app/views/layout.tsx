import * as React from 'react'
import { observer } from 'mobx-react'
import { HashRouter, Switch, Navlink } from 'react-router-dom'
import PageRouter from './router'
import LayoutTag from './layout.css';
import { Spin } from 'antd'
import store from '@models/mask'

@observer
class DepositLayout extends React.Component<{}, {}>{

    render() {
        let loadingStatus = store.getLoadingStatus();
        return (
            <LayoutTag>
                <HashRouter>

                    <div className='depositFrame'>
                        <PageRouter />
                    </div>
                </HashRouter>
            </LayoutTag>
        )
    }
}

export default DepositLayout