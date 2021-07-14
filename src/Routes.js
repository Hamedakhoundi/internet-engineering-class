import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import HamedAkhoundi from './views/39601906/index'
export default function Routes() {
    return (
        <Router>
            <Switch>

                <Route path="/39601906/" component={HamedAkhoundi} />

            </Switch>
        </Router>
    )
}
