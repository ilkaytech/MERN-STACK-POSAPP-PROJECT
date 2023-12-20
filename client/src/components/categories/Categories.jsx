import "./style.css";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Modal } from "antd";
import Input from "antd/es/input/Input";
import { useState } from "react";

const Categories = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const onFinis = (values) => {
    try {
      fetch(process.env.REACT_APP_SERVER_URL + "categories", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Token YOUR_TOKEN_HERE",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ul className="flex gap-4 md:flex-col text-lg">
      <li className="category-item">
        <span>Tümü</span>
      </li>
      <li className="category-item">
        <span>Yiyecek</span>
      </li>
      <li className="category-item">
        <span>İçecek</span>
      </li>
      <li className="category-item">
        <span>Meyve</span>
      </li>
      <li className="category-item">
        <span>Sebze</span>
      </li>
      <li className="category-item">
        <span>Kıyafet</span>
      </li>

      <li className="category-item">
        <span>Düzenle</span>
      </li>
      <li
        className="category-item !bg-purple-800 hover:opacity-80"
        onClick={() => setIsAddModalOpen(true)}
      >
        <PlusOutlined classID="md:text-2xl" />
      </li>
      <Modal
        title="Yeni Kategori Ekle"
        open={isAddModalOpen}
        onCancel={() => setIsAddModalOpen(false)}
        footer={false}
      >
        <Form layout="vertical" onFinish={onFinis}>
          <Form.Item
            name="name"
            label="Kategori Ekle"
            rules={[
              { required: true, message: "Kategori Alanı Boş Geçilemez!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item className="flex justify-end mb-0">
            <Button type="primary" htmlType="submit">
              Oluştur
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </ul>
  );
};

export default Categories;
