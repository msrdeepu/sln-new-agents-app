import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card, Typography } from "antd";

function ContactsList(props) {
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Welcome, ${props.auth.user.name}`}>
                <Typography.Text>You're logged in!</Typography.Text>
            </Card>
        </>
    );
}

ContactsList.layout = (page) => <AuthenticatedLayout children={page} />;

export default ContactsList;
