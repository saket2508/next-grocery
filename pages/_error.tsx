import Head from 'next/head';
import { NextPage } from 'next';
import Image from 'next/image';

type ErrorProps = {
    statusCode?: number;
};

const Error: NextPage<ErrorProps> = (props: ErrorProps) => {
    const { statusCode } = props;

    if (statusCode === 500 || statusCode === 501) {
        return (
            <div>
                <Head>
                    <title>501: Internal Server Error</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className="w-full">
                    <div className="mt-10 flex flex-col justify-center items-center">
                        <Image
                            alt="Server Error"
                            height={300}
                            width={300}
                            src="/assets/server_error.png"
                        />
                        <h1 className="text-4xl text-black pt-4">Error</h1>
                        <p className="text-gray-600 text-sm sm:text-base tracker-wide mt-3">
                            Could not get data from the server.
                        </p>
                    </div>
                </main>
            </div>
        );
    }
    // default to 404 NOT FOUND
    return (
        <div>
            <Head>
                <title>404: Not Found</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="w-full">
                <div className="mt-10 flex flex-col justify-center items-center">
                    <Image
                        alt="Page Not Found"
                        height={300}
                        width={300}
                        src="/assets/not_found.png"
                    />
                    <h1 className="text-5xl text-black pt-4">404</h1>
                    <p className="text-gray-600 text-sm sm:text-base tracker-wide mt-3">
                        The page you are looking for does not exist.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Error;
