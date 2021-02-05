import { Button, Col, Form, Input, message } from 'antd'
import React from 'react'
import Config from '../../../../config'

const validateMessages = {
  required: 'این فیلد الزامی است',
  types: {
    email: 'رایانامه نادرست است',
  },
}

const ContactForm = () => {
  const [form] = Form.useForm()
  const onFinish = data => {
    const formData = new FormData()
    for (const key in data) {
      if (data[key]) {
        formData.append(key, data[key])
      }
    }

    fetch(Config.contactFormUrl, { method: 'POST', body: formData })
      .then(() => {
        message.success('سپاس بابت ارسال پیامتون 🙂، به زودی بهتون پاسخ میدم')
        form.resetFields()
      })
      // eslint-disable-next-line no-console
      .catch(error => console.error('Error:', error))
  }

  return (
    <Col sm={24} md={24} lg={12} className="widthFull">
      <Form
        form={form}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item name={['name']} rules={[{ required: true }]}>
          <Input size="large" placeholder="نام" />
        </Form.Item>
        <Form.Item name={['email']} rules={[{ type: 'email' }]}>
          <Input size="large" placeholder="رایانامه" />
        </Form.Item>
        <Form.Item name={['message']} rules={[{ required: true }]}>
          <Input.TextArea size="large" rows={7} placeholder="پیام" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            shape="round"
            size="large"
            htmlType="submit"
            style={{ background: '#304CFD' }}
          >
            ارسال
          </Button>
        </Form.Item>
      </Form>
    </Col>
  )
}

export default ContactForm
