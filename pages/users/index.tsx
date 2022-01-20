import { GetStaticProps } from 'next';
import Link from 'next/link';

import { User } from '../../types';
import { sampleUserData } from '../../data/users';
import Layout from '../../components/Layout';
import List from '../../components/List';

type Props = {
    items: User[];
};

const WithStaticProps = ({ items }: Props) => (
    <Layout title="Users List | Next.js + TypeScript Example">

        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900">
                    Users
                </h1>
            </div>
        </header>
        <main>
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <p>
                    Example fetching data from inside <code>getStaticProps()</code>.
                </p>
                <p>You are currently on: /users</p>
                <br />
                <List items={items} />
                <p>
                    <Link href="/">
                        <a>Go home</a>
                    </Link>
                </p>
            </div>
        </main>
    </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
    // Example for including static props in a Next.js function component page.
    // Don't forget to include the respective types for any props passed into
    // the component.
    const items: User[] = sampleUserData;
    return { props: { items } };
};

export default WithStaticProps;
