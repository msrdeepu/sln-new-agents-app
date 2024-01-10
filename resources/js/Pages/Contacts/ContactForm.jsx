import React, { useState } from "react";

import {
    WhatsAppIcon,
    MailIcon,
    HeatmapIcon,
    IdCardIcon,
    GlobeIcon,
    PhoneIcon,
    CreditCard,
    LoginIcon,
} from "../Icons/Icons";
import { Col, Row, Form, Input, Select, Space } from "antd";
const { TextArea } = Input;

//btns
import BtnsItems from "../Btns/BtnsItems";

const ContactForm = () => {
    return (
        <Form layout="vertical">
            <Row gutter={[8, 4]}>
                <Col xs={24} md={12}>
                    <Form.Item label="Contact Type">
                        <Select
                            defaultValue="lucy"
                            style={{ width: "100%" }}
                            options={[
                                { value: "jack", label: "Jack" },
                                { value: "lucy", label: "Lucy" },
                                { value: "Yiminghe", label: "yiminghe" },
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Full Name">
                        <Space.Compact style={{ width: "100%" }}>
                            <Select
                                style={{ width: "20%" }}
                                defaultValue="Mr"
                                options={[
                                    { value: "Mr", label: "Mr" },
                                    { value: "Ms", label: "Ms" },
                                    { value: "MrS", label: "MrS" },
                                ]}
                            />
                            <Input
                                style={{ width: "80%" }}
                                showCount
                                placeholder="Enter Full Name"
                            />
                        </Space.Compact>
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Role / Designation">
                        <Input
                            showCount
                            placeholder="Enter Role / Designation"
                            addonBefore={<IdCardIcon color="blue" />}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Firm / Company Name">
                        <Input
                            showCount
                            placeholder="Enter Firm / Company Name"
                            addonBefore={<LoginIcon color="purple" />}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="PAN Number">
                        <Input
                            showCount
                            placeholder="Enter PAN Number"
                            addonBefore={<CreditCard color="red" />}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="GST Number">
                        <Input
                            showCount
                            placeholder="Enter GST Number"
                            addonBefore={<CreditCard color="red" />}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Phone Number">
                        <Input
                            showCount
                            placeholder="Enter Phone Number"
                            addonBefore={<PhoneIcon color="green" />}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Mobile Number">
                        <Input
                            showCount
                            placeholder="Enter Mobile Number"
                            addonBefore={<PhoneIcon color="green" />}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Alternate Contact Number">
                        <Input
                            showCount
                            placeholder="Alternate Contact Number"
                            addonBefore={<PhoneIcon color="green" />}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="WhatsApp Number">
                        <Input
                            showCount
                            placeholder="WhatsApp Number"
                            addonBefore={<WhatsAppIcon color="green" />}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Email ID">
                        <Input
                            showCount
                            placeholder="Email ID"
                            addonBefore={<MailIcon color="orange" />}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Alternate Email ID">
                        <Input
                            showCount
                            placeholder="Alternate Email ID"
                            addonBefore={<MailIcon color="blue" />}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Website URL">
                        <Input
                            showCount
                            placeholder="Website URL"
                            addonBefore={<GlobeIcon color="purple" />}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="City / Town">
                        <Input
                            showCount
                            placeholder="City / Town"
                            addonBefore={<HeatmapIcon color="orange" />}
                        />
                    </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                    <Form.Item label="Country">
                        <Select
                            defaultValue="lucy"
                            style={{ width: "100%" }}
                            options={[
                                { value: "jack", label: "Jack" },
                                { value: "lucy", label: "Lucy" },
                                { value: "Yiminghe", label: "yiminghe" },
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Preffered Billing Address / Shipping Address">
                        <Select
                            defaultValue="lucy"
                            style={{ width: "100%" }}
                            options={[
                                { value: "jack", label: "Jack" },
                                { value: "lucy", label: "Lucy" },
                                { value: "Yiminghe", label: "yiminghe" },
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Image / Avatar">
                        <Input placeholder="Image / Avatar" type="file" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Status">
                        <Select
                            defaultValue="lucy"
                            style={{ width: "100%" }}
                            options={[
                                { value: "jack", label: "Jack" },
                                { value: "lucy", label: "Lucy" },
                                { value: "Yiminghe", label: "yiminghe" },
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Image / Avatar">
                        <TextArea showCount placeholder="House Address" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Office Address">
                        <TextArea showCount placeholder="Office Address" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Permanent Address">
                        <TextArea showCount placeholder="Permanent Address" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Bank Account Details">
                        <TextArea
                            showCount
                            placeholder="Bank Account Details"
                        />
                    </Form.Item>
                </Col>
            </Row>
            <BtnsItems firstText="Add" secondText="Cancel" />
        </Form>
    );
};

export default ContactForm;
