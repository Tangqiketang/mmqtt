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

package org.monkey.mmq.web.security;


import org.monkey.mmq.auth.common.AuthConfigs;
import org.monkey.mmq.auth.model.Page;
import org.monkey.mmq.auth.model.User;
import org.monkey.mmq.auth.service.UserPersistService;
import org.monkey.mmq.auth.utils.Loggers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Custem user service.
 *
 * @author solley
 */
@Service
public class MmqUserDetailsServiceImpl implements UserDetailsService {
    
    private Map<String, User> userMap = new ConcurrentHashMap<>();
    
    @Autowired
    private UserPersistService userPersistService;
    
    @Autowired
    private AuthConfigs authConfigs;
    
    @Scheduled(initialDelay = 5000, fixedDelay = 15000)
    private void reload() {
        try {
            Page<User> users = getUsersFromDatabase(1, Integer.MAX_VALUE);
            if (users == null) {
                return;
            }
            
            Map<String, User> map = new ConcurrentHashMap<>(16);
            for (User user : users.getPageItems()) {
                map.put(user.getUsername(), user);
            }
            userMap = map;
        } catch (Exception e) {
            Loggers.AUTH.warn("[LOAD-USERS] load failed", e);
        }
    }
    
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        
        User user = userMap.get(username);
        if (!authConfigs.isCachingEnabled()) {
            user = userPersistService.findUserByUsername(username);
        }
        
        if (user == null) {
            throw new UsernameNotFoundException(username);
        }
        return new MmqUserDetails(user);
    }
    
    public void updateUserPassword(String username, String password) {
        userPersistService.updateUserPassword(username, password);
    }
    
    public Page<User> getUsersFromDatabase(int pageNo, int pageSize) {
        return userPersistService.getUsers(pageNo, pageSize);
    }
    
    public User getUser(String username) {
        User user = userMap.get(username);
        if (!authConfigs.isCachingEnabled()) {
            user = getUserFromDatabase(username);
        }
        return user;
    }
    
    public User getUserFromDatabase(String username) {
        return userPersistService.findUserByUsername(username);
    }

    public List<String> findUserLikeUsername(String username) {
        return userPersistService.findUserLikeUsername(username);
    }

    public void createUser(String username, String password) {
        userPersistService.createUser(username, password);
    }
    
    public void deleteUser(String username) {
        userPersistService.deleteUser(username);
    }
}
