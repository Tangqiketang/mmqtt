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

package org.monkey.mmq.core.consistency.serialize;



import org.monkey.mmq.core.consistency.Serializer;
import org.monkey.mmq.core.utils.ByteUtils;
import org.monkey.mmq.core.utils.JacksonUtils;
import org.springframework.stereotype.Component;

import java.lang.reflect.Type;

/**
 * Serializer implement by jackson.
 *
 * @author solley
 */
public class JacksonSerializer implements Serializer {
    
    private static final String NAME = "JSON";
    
    @Override
    public <T> T deserialize(byte[] data) {
        throw new UnsupportedOperationException("Jackson serializer can't support deserialize json without type");
    }
    
    @Override
    public <T> T deserialize(byte[] data, Class<T> cls) {
        if (ByteUtils.isEmpty(data)) {
            return null;
        }
        return JacksonUtils.toObj(data, cls);
    }
    
    @Override
    public <T> T deserialize(byte[] data, Type type) {
        if (ByteUtils.isEmpty(data)) {
            return null;
        }
        return JacksonUtils.toObj(data, type);
    }
    
    @Override
    public <T> byte[] serialize(T obj) {
        return JacksonUtils.toJsonBytes(obj);
    }
    
    @Override
    public String name() {
        return NAME;
    }
}