
                var input = [
                    {
                        "id": 1,
                        "title": "Title 1",
                        "childrens": [
                            {
                                "id": 2,
                                "title": "Title 2",
                                "childrens": []
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Title 3",
                        "childrens": [
                            {
                                "id": 4,
                                "title": "Title 4",
                                "childrens": [
                                    {
                                        "id": 5,
                                        "title": "Title 5",
                                        "childrens": [
                                        {
                                        "id": 6,
                                        "title": "Title 6",
                                        "childrens": []
                                    },
                                    {
                                        "id": 7,
                                        "title": "Title 7",
                                        "childrens": []
                                    },
                                    {
                                        "id": 8,
                                        "title": "Title 8",
                                        "childrens": []
                                    }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
                let log= [];
                function array(arr){
                        arr.map((element)=>{
                            let temp = {}
                            temp.id = element.id
                            temp.title = element.title
                            temp.childrens= []
                            log.push(temp)
                            array(element.childrens)
                        });

                }
                array(input);
                console.log(log);
