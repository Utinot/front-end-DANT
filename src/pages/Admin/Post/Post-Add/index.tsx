import React from 'react'
import { PlusOutlined } from '@ant-design/icons';
import {
   Form,
   Input,
   Button,
   Radio,
   Select,
   Cascader,
   DatePicker,
   InputNumber,
   TreeSelect,
   Switch,
   Checkbox,
   Upload,
} from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;

type Props = {}

const PostAdd = (props: Props) => {
   const onSuccess = (values: any) => {
      console.log(values);
   }

   const onFailed = (errorInfo: any) => {
      console.log(errorInfo);
   }

   return (
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
         <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            onFinish={onSuccess}
            onFinishFailed={onFailed}
         >
            <Form.Item label="Chekbox" name="disabled" valuePropName="checked">
               <Checkbox>Checkbox</Checkbox>
            </Form.Item>
            <Form.Item label="Radio">
               <Radio.Group>
                  <Radio value="apple"> Apple </Radio>
                  <Radio value="pear"> Pear </Radio>
               </Radio.Group>
            </Form.Item>
            <Form.Item label="Input">
               <Input />
            </Form.Item>
            <Form.Item label="Select">
               <Select>
                  <Select.Option value="demo">Demo</Select.Option>
               </Select>
            </Form.Item>
            <Form.Item label="TreeSelect">
               <TreeSelect
                  treeData={[
                     { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
                  ]}
               />
            </Form.Item>
            <Form.Item label="Cascader">
               <Cascader
                  options={[
                     {
                        value: 'zhejiang',
                        label: 'Zhejiang',
                        children: [
                           {
                              value: 'hangzhou',
                              label: 'Hangzhou',
                           },
                        ],
                     },
                  ]}
               />
            </Form.Item>
            <Form.Item label="DatePicker">
               <DatePicker />
            </Form.Item>
            <Form.Item label="RangePicker">
               <RangePicker />
            </Form.Item>
            <Form.Item label="InputNumber">
               <InputNumber />
            </Form.Item>
            <Form.Item label="TextArea">
               <TextArea rows={4} />
            </Form.Item>
            <Form.Item label="Switch" valuePropName="checked">
               <Switch />
            </Form.Item>
            <Form.Item label="Button">
               <Button type='primary'>Button</Button>
            </Form.Item>
         </Form>
      </div>
   )
}

export default PostAdd