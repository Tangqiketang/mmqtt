/*
 * Copyright 2021-2021 Monkey Group.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.monkey.mmq.config.driver;

import com.alibaba.druid.pool.DruidDataSource;
import org.monkey.mmq.core.utils.StringUtils;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * @author solley
 */
@Component
public class MysqlDriver implements ResourceDriver<Connection>{

    private ConcurrentHashMap<String, DruidDataSource> dataSources;

    static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";

    @Override
    public void addDriver(String resourceId, Map<String, Object> resource) {
        if (dataSources.get(resourceId) != null) return;
        if (StringUtils.isEmpty(resource.get("ip").toString())) return;
        if (StringUtils.isEmpty(resource.get("databaseName").toString())) return;
        if (StringUtils.isEmpty(resource.get("username").toString())) return;
        if (StringUtils.isEmpty(resource.get("password").toString())) return;

        DruidDataSource dataSource = new DruidDataSource(); // 创建Druid连接池
        dataSource.setDriverClassName(JDBC_DRIVER); // 设置连接池的数据库驱动
        dataSource.setUrl(String.format("jdbc:mysql://%s:%s/%s?useUnicode=true&characterEncoding=utf-8&useSSL=false&serverTimezone=GMT",
                resource.get("ip").toString(),
                resource.get("port").toString(),
                resource.get("databaseName").toString())); // 设置数据库的连接地址
        dataSource.setUsername(resource.get("username").toString()); // 数据库的用户名
        dataSource.setPassword(resource.get("password").toString()); // 数据库的密码
        dataSource.setInitialSize(8); // 设置连接池的初始大小
        dataSource.setMinIdle(1); // 设置连接池大小的下限
        dataSource.setMaxActive(20); // 设置连接池大小的上限
        dataSources.put(resourceId, dataSource);
    }

    @Override
    public Connection getDriver(String resourceId) throws Exception {
        if (dataSources == null) return null;
        if (dataSources.get(resourceId) == null) return null;
        return dataSources.get(resourceId).getConnection();
    }
}