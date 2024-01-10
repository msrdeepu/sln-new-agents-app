import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card } from "antd";
import ContactForm from "./ContactForm";

function CreateContact(props) {
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Welcome, ${props.auth.user.name}`}>
                <ContactForm />
            </Card>
        </>
    );
}

CreateContact.layout = (page) => <AuthenticatedLayout children={page} />;

export default CreateContact;
