import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {ErrorPage} from "./ErrorPage";
import Card from "antd/es/card/Card";
import {Descriptions, Tag} from "antd";
import {CheckCircleOutlined, ClockCircleOutlined} from "@ant-design/icons";
import {getTodo} from "../apis/api";

export function TodoDetail() {
    const {key} = useParams();
    const [targetTodo, setTargetTodo] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetchTodo();
    }, [key]);
    const fetchTodo = async () => {
        const response = await getTodo(key);
        setTargetTodo(response.data);

    };

    if (!targetTodo) {
        return <ErrorPage></ErrorPage>
    }


    return <div style={{display: "flex", justifyContent: 'center'}}>
        <Card style={{minWidth: '300px', width: '50%', maxWidth: '500px'}}>
            <Descriptions bordered column={1}>
                <Descriptions.Item label="ID">
                    {targetTodo.id}
                </Descriptions.Item>

                <Descriptions.Item label="Content">
                    {targetTodo.text}
                </Descriptions.Item>
                <Descriptions.Item label="Status">
                    {targetTodo.done ? (
                        <Tag icon={<CheckCircleOutlined/>} color="success">
                            DONE
                        </Tag>
                    ) : (
                        <Tag icon={<ClockCircleOutlined/>} color="processing">
                            PENDING
                        </Tag>
                    )}
                </Descriptions.Item>
            </Descriptions>
        </Card>
    </div>;
}