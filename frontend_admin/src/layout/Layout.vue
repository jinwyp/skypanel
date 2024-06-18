<script setup lang="ts">
import { ref } from 'vue'
import { ElMessageBox, ElMessage } from "element-plus";
import SubMenu from "@/layout/SubMenu.vue";

const activeMenu = "/home/index";
const menuList = [
    {
        "path": "/home/index",
        "name": "home",
        "component": "/home/index",
        "meta": {
            "icon": "HomeFilled",
            "title": "首页",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": true,
            "isKeepAlive": true
        }
    },
    {
        "path": "/appsystem",
        "name": "appSystem",
        "component": "/appsystem",
        "meta": {
            "icon": "MessageBox",
            "title": "系统软件",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
        },

    },
    {
        "path": "/dataScreen",
        "name": "dataScreen",
        "component": "/dataScreen/index",
        "meta": {
            "icon": "Histogram",
            "title": "数据大屏",
            "isLink": "",
            "isHide": false,
            "isFull": true,
            "isAffix": false,
            "isKeepAlive": true
        }
    },
    {
        "path": "/proTable",
        "name": "proTable",
        "redirect": "/proTable/useProTable",
        "meta": {
            "icon": "MessageBox",
            "title": "超级表格",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
        },
        "children": [
            {
                "path": "/proTable/useProTable",
                "name": "useProTable",
                "component": "/proTable/useProTable/index",
                "meta": {
                    "icon": "Menu",
                    "title": "使用 ProTable",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                },
                "children": [
                    {
                        "path": "/proTable/useProTable/detail/:id",
                        "name": "useProTableDetail",
                        "component": "/proTable/useProTable/detail",
                        "meta": {
                            "icon": "Menu",
                            "title": "ProTable 详情",
                            "isLink": "",
                            "isHide": true,
                            "isFull": false,
                            "isAffix": false,
                            "isKeepAlive": true,
                            "activeMenu": "/proTable/useProTable"
                        }
                    }
                ]
            },
            {
                "path": "/proTable/useTreeFilter",
                "name": "useTreeFilter",
                "component": "/proTable/useTreeFilter/index",
                "meta": {
                    "icon": "Menu",
                    "title": "使用 TreeFilter",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/proTable/useTreeFilter/detail/:id",
                "name": "useTreeFilterDetail",
                "component": "/proTable/useTreeFilter/detail",
                "meta": {
                    "icon": "Menu",
                    "title": "TreeFilter 详情",
                    "activeMenu": "/proTable/useTreeFilter",
                    "isLink": "",
                    "isHide": true,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/proTable/useSelectFilter",
                "name": "useSelectFilter",
                "component": "/proTable/useSelectFilter/index",
                "meta": {
                    "icon": "Menu",
                    "title": "使用 SelectFilter",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/proTable/treeProTable",
                "name": "treeProTable",
                "component": "/proTable/treeProTable/index",
                "meta": {
                    "icon": "Menu",
                    "title": "树形 ProTable",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/proTable/complexProTable",
                "name": "complexProTable",
                "component": "/proTable/complexProTable/index",
                "meta": {
                    "icon": "Menu",
                    "title": "复杂 ProTable",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/proTable/document",
                "name": "proTableDocument",
                "component": "/proTable/document/index",
                "meta": {
                    "icon": "Menu",
                    "title": "ProTable 文档",
                    "isLink": "https://juejin.cn/post/7166068828202336263/#heading-14",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            }
        ]
    },
    {
        "path": "/auth",
        "name": "auth",
        "redirect": "/auth/menu",
        "meta": {
            "icon": "Lock",
            "title": "权限管理",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
        },
        "children": [
            {
                "path": "/auth/menu",
                "name": "authMenu",
                "component": "/auth/menu/index",
                "meta": {
                    "icon": "Menu",
                    "title": "菜单权限",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/auth/button",
                "name": "authButton",
                "component": "/auth/button/index",
                "meta": {
                    "icon": "Menu",
                    "title": "按钮权限",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            }
        ]
    },
    {
        "path": "/assembly",
        "name": "assembly",
        "redirect": "/assembly/guide",
        "meta": {
            "icon": "Briefcase",
            "title": "常用组件",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
        },
        "children": [
            {
                "path": "/assembly/guide",
                "name": "guide",
                "component": "/assembly/guide/index",
                "meta": {
                    "icon": "Menu",
                    "title": "引导页",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/assembly/tabs",
                "name": "tabs",
                "component": "/assembly/tabs/index",
                "meta": {
                    "icon": "Menu",
                    "title": "标签页操作",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                },
                "children": [
                    {
                        "path": "/assembly/tabs/detail/:id",
                        "name": "tabsDetail",
                        "component": "/assembly/tabs/detail",
                        "meta": {
                            "icon": "Menu",
                            "title": "Tab 详情",
                            "activeMenu": "/assembly/tabs",
                            "isLink": "",
                            "isHide": true,
                            "isFull": false,
                            "isAffix": false,
                            "isKeepAlive": true
                        }
                    }
                ]
            },
            {
                "path": "/assembly/selectIcon",
                "name": "selectIcon",
                "component": "/assembly/selectIcon/index",
                "meta": {
                    "icon": "Menu",
                    "title": "图标选择器",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/assembly/selectFilter",
                "name": "selectFilter",
                "component": "/assembly/selectFilter/index",
                "meta": {
                    "icon": "Menu",
                    "title": "分类筛选器",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/assembly/treeFilter",
                "name": "treeFilter",
                "component": "/assembly/treeFilter/index",
                "meta": {
                    "icon": "Menu",
                    "title": "树形筛选器",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/assembly/svgIcon",
                "name": "svgIcon",
                "component": "/assembly/svgIcon/index",
                "meta": {
                    "icon": "Menu",
                    "title": "SVG 图标",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/assembly/uploadFile",
                "name": "uploadFile",
                "component": "/assembly/uploadFile/index",
                "meta": {
                    "icon": "Menu",
                    "title": "文件上传",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/assembly/batchImport",
                "name": "batchImport",
                "component": "/assembly/batchImport/index",
                "meta": {
                    "icon": "Menu",
                    "title": "批量添加数据",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/assembly/wangEditor",
                "name": "wangEditor",
                "component": "/assembly/wangEditor/index",
                "meta": {
                    "icon": "Menu",
                    "title": "富文本编辑器",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/assembly/draggable",
                "name": "draggable",
                "component": "/assembly/draggable/index",
                "meta": {
                    "icon": "Menu",
                    "title": "拖拽组件",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            }
        ]
    },
    {
        "path": "/dashboard",
        "name": "dashboard",
        "redirect": "/dashboard/dataVisualize",
        "meta": {
            "icon": "Odometer",
            "title": "Dashboard",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
        },
        "children": [
            {
                "path": "/dashboard/dataVisualize",
                "name": "dataVisualize",
                "component": "/dashboard/dataVisualize/index",
                "meta": {
                    "icon": "Menu",
                    "title": "数据可视化",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            }
        ]
    },
    {
        "path": "/form",
        "name": "form",
        "redirect": "/form/proForm",
        "meta": {
            "icon": "Tickets",
            "title": "表单 Form",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
        },
        "children": [
            {
                "path": "/form/proForm",
                "name": "proForm",
                "component": "/form/proForm/index",
                "meta": {
                    "icon": "Menu",
                    "title": "超级 Form",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/form/basicForm",
                "name": "basicForm",
                "component": "/form/basicForm/index",
                "meta": {
                    "icon": "Menu",
                    "title": "基础 Form",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/form/validateForm",
                "name": "validateForm",
                "component": "/form/validateForm/index",
                "meta": {
                    "icon": "Menu",
                    "title": "校验 Form",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/form/dynamicForm",
                "name": "dynamicForm",
                "component": "/form/dynamicForm/index",
                "meta": {
                    "icon": "Menu",
                    "title": "动态 Form",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            }
        ]
    },
    {
        "path": "/echarts",
        "name": "echarts",
        "redirect": "/echarts/waterChart",
        "meta": {
            "icon": "TrendCharts",
            "title": "ECharts",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
        },
        "children": [
            {
                "path": "/echarts/waterChart",
                "name": "waterChart",
                "component": "/echarts/waterChart/index",
                "meta": {
                    "icon": "Menu",
                    "title": "水型图",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/echarts/columnChart",
                "name": "columnChart",
                "component": "/echarts/columnChart/index",
                "meta": {
                    "icon": "Menu",
                    "title": "柱状图",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/echarts/lineChart",
                "name": "lineChart",
                "component": "/echarts/lineChart/index",
                "meta": {
                    "icon": "Menu",
                    "title": "折线图",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/echarts/pieChart",
                "name": "pieChart",
                "component": "/echarts/pieChart/index",
                "meta": {
                    "icon": "Menu",
                    "title": "饼图",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/echarts/radarChart",
                "name": "radarChart",
                "component": "/echarts/radarChart/index",
                "meta": {
                    "icon": "Menu",
                    "title": "雷达图",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/echarts/nestedChart",
                "name": "nestedChart",
                "component": "/echarts/nestedChart/index",
                "meta": {
                    "icon": "Menu",
                    "title": "嵌套环形图",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            }
        ]
    },
    {
        "path": "/directives",
        "name": "directives",
        "redirect": "/directives/copyDirect",
        "meta": {
            "icon": "Stamp",
            "title": "自定义指令",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
        },
        "children": [
            {
                "path": "/directives/copyDirect",
                "name": "copyDirect",
                "component": "/directives/copyDirect/index",
                "meta": {
                    "icon": "Menu",
                    "title": "复制指令",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/directives/watermarkDirect",
                "name": "watermarkDirect",
                "component": "/directives/watermarkDirect/index",
                "meta": {
                    "icon": "Menu",
                    "title": "水印指令",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/directives/dragDirect",
                "name": "dragDirect",
                "component": "/directives/dragDirect/index",
                "meta": {
                    "icon": "Menu",
                    "title": "拖拽指令",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/directives/debounceDirect",
                "name": "debounceDirect",
                "component": "/directives/debounceDirect/index",
                "meta": {
                    "icon": "Menu",
                    "title": "防抖指令",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/directives/throttleDirect",
                "name": "throttleDirect",
                "component": "/directives/throttleDirect/index",
                "meta": {
                    "icon": "Menu",
                    "title": "节流指令",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/directives/longpressDirect",
                "name": "longpressDirect",
                "component": "/directives/longpressDirect/index",
                "meta": {
                    "icon": "Menu",
                    "title": "长按指令",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            }
        ]
    },
    {
        "path": "/menu",
        "name": "menu",
        "redirect": "/menu/menu1",
        "meta": {
            "icon": "List",
            "title": "菜单嵌套",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
        },
        "children": [
            {
                "path": "/menu/menu1",
                "name": "menu1",
                "component": "/menu/menu1/index",
                "meta": {
                    "icon": "Menu",
                    "title": "菜单1",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/menu/menu2",
                "name": "menu2",
                "redirect": "/menu/menu2/menu21",
                "meta": {
                    "icon": "Menu",
                    "title": "菜单2",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                },
                "children": [
                    {
                        "path": "/menu/menu2/menu21",
                        "name": "menu21",
                        "component": "/menu/menu2/menu21/index",
                        "meta": {
                            "icon": "Menu",
                            "title": "菜单2-1",
                            "isLink": "",
                            "isHide": false,
                            "isFull": false,
                            "isAffix": false,
                            "isKeepAlive": true
                        }
                    },
                    {
                        "path": "/menu/menu2/menu22",
                        "name": "menu22",
                        "redirect": "/menu/menu2/menu22/menu221",
                        "meta": {
                            "icon": "Menu",
                            "title": "菜单2-2",
                            "isLink": "",
                            "isHide": false,
                            "isFull": false,
                            "isAffix": false,
                            "isKeepAlive": true
                        },
                        "children": [
                            {
                                "path": "/menu/menu2/menu22/menu221",
                                "name": "menu221",
                                "component": "/menu/menu2/menu22/menu221/index",
                                "meta": {
                                    "icon": "Menu",
                                    "title": "菜单2-2-1",
                                    "isLink": "",
                                    "isHide": false,
                                    "isFull": false,
                                    "isAffix": false,
                                    "isKeepAlive": true
                                }
                            },
                            {
                                "path": "/menu/menu2/menu22/menu222",
                                "name": "menu222",
                                "component": "/menu/menu2/menu22/menu222/index",
                                "meta": {
                                    "icon": "Menu",
                                    "title": "菜单2-2-2",
                                    "isLink": "",
                                    "isHide": false,
                                    "isFull": false,
                                    "isAffix": false,
                                    "isKeepAlive": true
                                }
                            }
                        ]
                    },
                    {
                        "path": "/menu/menu2/menu23",
                        "name": "menu23",
                        "component": "/menu/menu2/menu23/index",
                        "meta": {
                            "icon": "Menu",
                            "title": "菜单2-3",
                            "isLink": "",
                            "isHide": false,
                            "isFull": false,
                            "isAffix": false,
                            "isKeepAlive": true
                        }
                    }
                ]
            },
            {
                "path": "/menu/menu3",
                "name": "menu3",
                "component": "/menu/menu3/index",
                "meta": {
                    "icon": "Menu",
                    "title": "菜单3",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            }
        ]
    },
    {
        "path": "/system",
        "name": "system",
        "redirect": "/system/accountManage",
        "meta": {
            "icon": "Tools",
            "title": "系统管理",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
        },
        "children": [
            {
                "path": "/system/accountManage",
                "name": "accountManage",
                "component": "/system/accountManage/index",
                "meta": {
                    "icon": "Menu",
                    "title": "账号管理",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/system/roleManage",
                "name": "roleManage",
                "component": "/system/roleManage/index",
                "meta": {
                    "icon": "Menu",
                    "title": "角色管理",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/system/menuMange",
                "name": "menuMange",
                "component": "/system/menuMange/index",
                "meta": {
                    "icon": "Menu",
                    "title": "菜单管理",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/system/departmentManage",
                "name": "departmentManage",
                "component": "/system/departmentManage/index",
                "meta": {
                    "icon": "Menu",
                    "title": "部门管理",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/system/dictManage",
                "name": "dictManage",
                "component": "/system/dictManage/index",
                "meta": {
                    "icon": "Menu",
                    "title": "字典管理",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/system/timingTask",
                "name": "timingTask",
                "component": "/system/timingTask/index",
                "meta": {
                    "icon": "Menu",
                    "title": "定时任务",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/system/systemLog",
                "name": "systemLog",
                "component": "/system/systemLog/index",
                "meta": {
                    "icon": "Menu",
                    "title": "系统日志",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            }
        ]
    },
    {
        "path": "/link",
        "name": "link",
        "redirect": "/link/bing",
        "meta": {
            "icon": "Paperclip",
            "title": "外部链接",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
        },
        "children": [
            {
                "path": "/link/bing",
                "name": "bing",
                "component": "/link/bing/index",
                "meta": {
                    "icon": "Menu",
                    "title": "Bing 内嵌",
                    "isLink": "",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/link/gitee",
                "name": "gitee",
                "component": "/link/gitee/index",
                "meta": {
                    "icon": "Menu",
                    "title": "Gitee 仓库",
                    "isLink": "https://gitee.com/HalseySpicy/Geeker-Admin",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/link/github",
                "name": "github",
                "component": "/link/github/index",
                "meta": {
                    "icon": "Menu",
                    "title": "GitHub 仓库",
                    "isLink": "https://github.com/HalseySpicy/Geeker-Admin",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/link/docs",
                "name": "docs",
                "component": "/link/docs/index",
                "meta": {
                    "icon": "Menu",
                    "title": "项目文档",
                    "isLink": "https://docs.spicyboy.cn",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            },
            {
                "path": "/link/juejin",
                "name": "juejin",
                "component": "/link/juejin/index",
                "meta": {
                    "icon": "Menu",
                    "title": "掘金主页",
                    "isLink": "https://juejin.cn/user/3263814531551816/posts",
                    "isHide": false,
                    "isFull": false,
                    "isAffix": false,
                    "isKeepAlive": true
                }
            }
        ]
    },
    {
        "path": "/about/index",
        "name": "about",
        "component": "/about/index",
        "meta": {
            "icon": "InfoFilled",
            "title": "关于项目",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
        }
    }
]

const accordion = ref(true)

const isCollapse = ref(false)

const changeCollapse = () => {
    isCollapse.value = !isCollapse.value
};

const username = "admin";


// 退出登录
const logout = () => {
  ElMessageBox.confirm("您是否确认退出登录?", "温馨提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  }).then(async () => {
    // 1.执行退出登录接口
    // await logoutApi();

    // 2.清除 Token
    // userStore.setToken("");

    // 3.重定向到登陆页
    // router.replace(LOGIN_URL);
    ElMessage.success("退出登录成功！");
  });
};

</script>



<template>

  <el-container class="layout">

    <el-aside>
      <div class="aside-box" :style="{ width: isCollapse ? '65px' : '210px' }">
        <div class="logo flx-center">
          <img class="logo-img" src="@/assets/images/logo.svg" alt="logo" />
          <span v-show="!isCollapse" class="logo-text">天空面板</span>
        </div>

        <el-scrollbar>
          <el-menu :router="false" :default-active="activeMenu" :collapse="isCollapse" :unique-opened="accordion" :collapse-transition="false" >
            <SubMenu :menu-list="menuList" />
          </el-menu>
        </el-scrollbar>

      </div>
    </el-aside>

    <el-container>
      <el-header>
        <div class="tool-bar-lf">
            <el-icon class="collapse-icon" @click="changeCollapse">
                <component :is="isCollapse ? 'expand' : 'fold'"></component>
            </el-icon>
        </div>
        
        <div class="tool-bar-ri">

            <div class="header-icon">

                <div class="message">
                    <el-popover placement="bottom" :width="310" trigger="click">
                    <template #reference>
                        <el-badge :value="5" class="item">
                        <i :class="'iconfont icon-xiaoxi'" class="toolBar-icon"></i>
                        </el-badge>
                    </template>
                    </el-popover>
                </div>
            </div>


            <span class="username">{{ username }}</span>

            <el-dropdown trigger="click">
                <div class="avatar">
                    <img src="@/assets/images/avatar.gif" alt="avatar" />
                </div>
                <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item divided @click="logout">
                        <el-icon><SwitchButton /></el-icon>退出登录
                    </el-dropdown-item>
                </el-dropdown-menu>
                </template>
            </el-dropdown>

        </div>

      </el-header>

      <el-main>
        <RouterView />
      </el-main>
      
    </el-container>



  </el-container>
</template>



<style lang="scss" scoped>

.el-container {
  width: 100%;
  height: 100%;
  :deep(.el-aside) {
    width: auto;
    background-color: var(--el-menu-bg-color);
    border-right: 1px solid var(--el-aside-border-color);
    .aside-box {
      display: flex;
      flex-direction: column;
      height: 100%;
      transition: width 0.3s ease;
      .el-scrollbar {
        height: calc(100% - 55px);
        .el-menu {
          width: 100%;
          overflow-x: hidden;
          border-right: none;
        }
      }
      .logo {
        box-sizing: border-box;
        height: 55px;
        .logo-img {
          width: 28px;
          margin-right: 6px;
          object-fit: contain;
        }
        .logo-text {
          font-size: 21.5px;
          font-weight: bold;
          color: var(--el-aside-logo-text-color);
          white-space: nowrap;
        }
      }
    }
  }
  .el-header {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 55px;
    padding: 0 15px;
    background-color: var(--el-header-bg-color);
    border-bottom: 1px solid var(--el-header-border-color);
  }
}



.tool-bar-lf {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  white-space: nowrap;
}


.collapse-icon {
  margin-right: 20px;
  font-size: 22px;
  color: var(--el-header-text-color);
  cursor: pointer;
}


.tool-bar-ri {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 25px;

  .header-icon {
    display: flex;
    align-items: center;

    & > * {
      margin-left: 21px;
      color: var(--el-header-text-color);
    }
  }
  .username {
    margin: 0 20px;
    font-size: 15px;
    color: var(--el-header-text-color);
  }
}


.message-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 260px;
  line-height: 45px;
}
.message-list {
  display: flex;
  flex-direction: column;
  .message-item {
    display: flex;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid var(--el-border-color-light);
    &:last-child {
      border: none;
    }
    .message-icon {
      width: 40px;
      height: 40px;
      margin: 0 20px 0 5px;
    }
    .message-content {
      display: flex;
      flex-direction: column;
      .message-title {
        margin-bottom: 5px;
      }
      .message-date {
        font-size: 12px;
        color: var(--el-text-color-secondary);
      }
    }
  }
}


.avatar {
  width: 40px;
  height: 40px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
  }
}




</style>
