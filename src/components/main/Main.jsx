import { Route } from '../router/SolidRouter';
import { Navigation } from '../navigation/Navigation'

const Home = () => (
    <>
        <h1>Welcome to this Simple Routing Example</h1>
        <p>Click the links in the Navigation above to load different routes.</p>
    </>
);

const Profile = () => (
    <>
        <h1>Your Profile</h1>
        <p>This section could be about you.</p>
    </>
);

const Settings = () => (
    <>
        <h1>Settings</h1>
        <p>All that configuration you never really ever want to look at.</p>
    </>
);



export const Main = () => {
    return (
        <>

            <Navigation />
            <Route component={Home} path='' />
            <Route component={Profile} path='profile' />
            <Route component={Settings} path='settings' />
        </>
    )
}