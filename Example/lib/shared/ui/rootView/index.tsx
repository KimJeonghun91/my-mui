import styles from "./ui/rootView.module.css";

export default function RootView({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className={styles.main}>
            {children}
        </main>
    );
}
