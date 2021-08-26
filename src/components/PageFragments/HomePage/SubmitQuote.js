import { Button, Form, Input, message } from 'antd'
import PropType from 'prop-types'
import React from 'react'
import { quotesToken, quotesUrl } from '../../../../config'

const SubmitQuote = ({ handleOk }) => {
  const [form] = Form.useForm()

  const onFinish = ({ author, name, link = '', text }) => {
    fetch(quotesUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${quotesToken}`,
      },
      body: JSON.stringify({
        query: `
        mutation MyMutation {
        __typename
        createQuotes(data: {
          text: "${text}",
          author: "${author}",
          senderName: "${name}"
          ${link && `,senderLink: "${link}"`}
        }) {
          id
        }
      }
      `,
      }),
    })
      .then(res => res.json())
      .then(() => {
        message.success('دمت گرم بابت اشتراک گذاری 🙂')
      })
      .catch(err => {
        message.error(
          'اوپس! یه مشکلی بود. ممنون میشم اگه به صالح خبر بدی 💔',
          6
        )
        console.error(err)
      })
    handleOk()
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  const validateMessages = {
    required: 'این فیلد الزامی است',
    types: {
      url: 'آدرس نادرست است',
    },
  }
  return (
    <Form
      form={form}
      name="nest-messages"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      validateMessages={validateMessages}
    >
      <Form.Item name={['author']} rules={[{ required: true }]}>
        <Input size="middle" placeholder="گوینده" />
      </Form.Item>
      <Form.Item name={['name']} rules={[{ required: true }]}>
        <Input size="middle" placeholder="نام شما" />
      </Form.Item>
      <Form.Item name={['link']} rules={[{ type: 'url' }]}>
        <Input size="middle" placeholder="لینک به شما" />
      </Form.Item>
      <Form.Item name={['text']} rules={[{ required: true }]}>
        <Input.TextArea size="middle" rows={2} placeholder="متن" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          ارسال
        </Button>
      </Form.Item>
    </Form>
  )
}

SubmitQuote.propTypes = {
  handleOk: PropType.func.isRequired,
}

export default SubmitQuote
