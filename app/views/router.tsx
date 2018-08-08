import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

class Router extends React.Component<{}, {}>{
    render() {
        return (
            <Switch>
                <Route path='' component='' />
                <Redirect />
            </Switch>
        )
    }
}

export default Router