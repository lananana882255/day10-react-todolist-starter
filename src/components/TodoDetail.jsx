import {useParams} from "react-router";
import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {ErrorPage} from "./ErrorPage";
import Card from "antd/es/card/Card";
import {Descriptions, Tag} from "antd";
import {CheckCircleOutlined, ClockCircleOutlined} from "@ant-design/icons";

export function TodoDetail() {
    const {key} = useParams();
    const {state, dispatch} = useContext(TodoContext)
    const targetTodo=state.find(todo=>todo.id===key)
    if(!targetTodo){
        return <ErrorPage></ErrorPage>
    }

    return <div>
        <Card>
            <Descriptions bordered column={1}>
                <Descriptions.Item label="ID">
                    {targetTodo.id}
                </Descriptions.Item>

                <Descriptions.Item label="Content">
                    {targetTodo.text}
                </Descriptions.Item>
                <Descriptions.Item label="Status">
                    {targetTodo.done ? (
                        <Tag icon={<CheckCircleOutlined />} color="success">
                            DONE
                        </Tag>
                    ) : (
                        <Tag icon={<ClockCircleOutlined />} color="processing">
                            PENDING
                        </Tag>
                    )}
                </Descriptions.Item>
            </Descriptions>
        </Card>
    </div>;
}