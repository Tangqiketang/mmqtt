package org.monkey.mmq.config.matedata;

public enum ResourceEnum {
    MYSQL(org.monkey.mmq.config.driver.MysqlDriver.class),
    KAFKA(org.monkey.mmq.config.driver.KafkaDriver.class),
    POSTGRESQL(org.monkey.mmq.config.driver.PostgresqlDriver.class),
    TDENGINE(org.monkey.mmq.config.driver.TDengineDriver.class),
    INFLUXDB(org.monkey.mmq.config.driver.InfluxDBDriver.class);

    private Class name;

    public Class getName() {
        return name;
    }

    ResourceEnum(Class name) {
        this.name = name;
    }
}