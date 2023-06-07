import Header from "@/components/Header";
import Head from "next/head";

const Layout = (props: any) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <main>{props.children}</main>
        </>
    )
};
export default Layout;