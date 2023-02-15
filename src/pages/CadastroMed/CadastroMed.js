import "./CadastroMed.css";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,
} from "antd";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Navbar from "../../componentes/Navbar/Navbar";
import { db } from "../../firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";

const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const CadastroMed = () => {
  const [novoNome, setNovoNome] = useState([]);
  const [novoCRM, setNovoCRM] = useState([]);
  const [novaEspecialidade, setNovaEspecialidade] = useState([]);
  const [novoLocal, setNovoLocal] = useState([]);
  const [novoAtende, setNovoAtende] = useState([]);
  const [novoConvenio, setNovoConvenio] = useState([]);

  const [medico, setMedico] = useState([]);

  const todosMedicos = collection(db, "medicos2");

  useEffect(() => {
    const getTodosMedicos = async () => {
      try {
        const data = await getDocs(todosMedicos);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setMedico(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getTodosMedicos();
  }, []);

  const onSubimitMedicos = async () => {
    try {
      await addDoc(todosMedicos, {
        nome: novoNome,
        CRM: novoCRM,
        especialidade: novaEspecialidade,
        local: novoLocal,
        atende: novoAtende,
        convênio: novoConvenio,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navbar></Navbar>

      {/* d-flex flex-column justify-content-center align-items-center */}

      <Container className="tudo">
        <Row className="justify-content-center">
          <Col xs={12} md={6} xl={5}>
            {/* <div>
                            {medico.map((medicos2) => (
                                <div>
                                    <h1>{medicos2.nome}</h1>
                                    <h1>{medicos2.CRM}</h1>
                                </div>
                            ))}
                        </div>  */}

            <Form
              labelCol={{
                span: 19,
              }}
              wrapperCol={{
                span: 34,
              }}
              layout="vertical"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                maxWidth: 1200,
                textAlign: "start",
                margin: 0,
              }}
            >
              {/* <Form.Item  label="Tipo">
                            <Radio.Group>
                                <Radio value="medico"> Medico </Radio>
                                <Radio value="clinica"> Clinica </Radio>
                            </Radio.Group>
                            </Form.Item> */}

              <Form.Item label="Nome:">
                <Input
                  size="large"
                  required={true}
                  placeholder="Insira seu Nome"
                  type="text"
                  onChange={(e) => setNovoNome(e.target.value)}
                />
              </Form.Item>

              <Form.Item label="CRM:">
                <Input
                  size="large"
                  required={true}
                  placeholder="Insira seu CRM"
                  type="number"
                  onChange={(e) => setNovoCRM(e.target.value)}
                />
              </Form.Item>

              <Form.Item label="Especialidade">
                <Select
                  value={novaEspecialidade}
                  onChange={(value) => setNovaEspecialidade(value)}
                  size="large"
                  placeholder="Insira sua especialidade"
                >
                  <Select.Option value="Psiquiatra">Psiquiatra</Select.Option>
                  <Select.Option value="Oftalmologista">
                    Oftalmologista
                  </Select.Option>
                  <Select.Option value="Geriatra">Geriatra</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item label="Cidade">
                <Select
                  size="large"
                  placeholder="Insira sua cidade"
                  value={novoLocal}
                  onChange={(value) => setNovoLocal(value)}
                >
                  <Select.Option value="Barbacena">Barbacena</Select.Option>
                  <Select.Option value="Vasconcelos">Vasconcelos</Select.Option>
                  <Select.Option value="Carandaí">Carandaí</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item label="Atende:">
                <Select
                  size="large"
                  placeholder="Insira sua cidade"
                  value={novoAtende}
                  onChange={(value) => setNovoAtende(value)}
                >
                  <Select.Option value="Santa casa">Santa casa</Select.Option>
                  <Select.Option value="Regional">Regional</Select.Option>
                  <Select.Option value="Ibiapaba">Ibiapaba</Select.Option>
                  <Select.Option value="Particular">Particular</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item label="Convênio">
                <Select
                  size="large"
                  placeholder="Insira seu telefone"
                  value={novoConvenio}
                  onChange={(value) => setNovoConvenio(value)}
                >
                  <Select.Option value="Unimed">Unimed</Select.Option>
                  <Select.Option value="CedPlan">CedPlan</Select.Option>
                  <Select.Option value="Nenhum">Nenhum</Select.Option>
                </Select>
              </Form.Item>

              {/* <Form.Item label="Biografia">
                            <TextArea rows={4} />
                            </Form.Item>
                            <Form.Item label="Upload" valuePropName="fileList">
                            <Upload action="/upload.do" listType="picture-card">
                                <div>
                                <PlusOutlined />
                                <div
                                    style={{
                                    marginTop: 8,
                                    }}
                                >
                                    Upload
                                </div>
                                </div>
                            </Upload>
                            </Form.Item>
                             */}
              <Form.Item className="enviar">
                <Button onClick={onSubimitMedicos}>Confirmar</Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default () => <CadastroMed />;
