/* eslint-disable */
import {
  Outlet, NavLink, useLoaderData, redirect, useNavigation, useSubmit,
} from 'react-router-dom';
import { getContacts, createContact } from '../components/Contact';

export async function action() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');
  const contacts = await getContacts(q);
  return { contacts, q };
}

export default function Root() {
  const { contacts, q } = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();

  const searching = navigation.location && new URLSearchParams(navigation.location.search).has('q');

  // useEffect(() => {
  //   document.getElementById("q").value = q;
  // }, [q]);

  return (
    <>
      <div id="sidebar">
        <h1>Space Travelers' Hub</h1>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) => (isActive
                  ? 'active'
                  : isPending
                    ? 'pending'
                    : '')}
              >
                Rockets

              </NavLink>
            </li>
            <li>
              <NavLink
                to="missions/"
                className={({ isActive, isPending }) => (isActive
                  ? 'active'
                  : isPending
                    ? 'pending'
                    : '')}
              >
                Missions

              </NavLink>
            </li>
            <li className='separator'></li>
            <li>
              <NavLink
                to="myprofile/"
                className={({ isActive, isPending }) => (isActive
                  ? 'active'
                  : isPending
                    ? 'pending'
                    : '')}
              >
                My Profile

              </NavLink>
            </li>

          </ul>
        </nav>
      </div>
      <div id="detail" className={navigation.state === 'loading' ? 'loading' : ''}>
        <Outlet />

      </div>
    </>
  );
}
